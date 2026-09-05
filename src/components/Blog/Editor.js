import { Editor } from '@tinymce/tinymce-react';

/**
 * BlogEditor
 * - Supports rich text + images
 * - Images upload directly to Cloudinary (NO Vercel API usage)
 * - Content saved as HTML to Neon DB
 */
const BlogEditor = ({ content, setContent, height = 500 }) => {

  // 🔑 Environment variables
  const apiKey = process.env.REACT_APP_TINYMCE_API_KEY;
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

  return (
    <div className="blog-editor border border-gray-200 dark:border-dark-600 rounded-lg overflow-hidden">
      <Editor
        apiKey={apiKey}
        value={content}
        onEditorChange={(newContent) => {
          // 🔒 Block base64 images completely (prevents 413 error)
          if (newContent.includes("data:image")) {
            console.warn("⚠️ Base64 image detected and blocked.");
            return;
          }
          setContent(newContent);
        }}
        init={{
          height,
          menubar: true,

          /* ==============================
             Plugins (FIXED)
          ============================== */
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'help',
            'wordcount'
          ],

          /* ==============================
             Toolbar
          ============================== */
          toolbar:
            'undo redo | blocks | bold italic underline | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | ' +
            'link image media table | code preview',

          /* ==============================
             Styling
          ============================== */
          content_style:
            'body { font-family: Helvetica, Arial, sans-serif; font-size: 16px; }',
          skin: 'oxide-dark',
          content_css: 'dark',
          branding: false,
          promotion: false,

          /* ==============================
             Image Handling (FIXED)
          ============================== */
          automatic_uploads: true,
          paste_data_images: false, // ❌ Prevent base64 images
          file_picker_types: 'image',

          /* ==============================
             Cloudinary Image Upload Handler
          ============================== */
          images_upload_handler: async (blobInfo) => {
            try {
              console.log('📤 Uploading image to Cloudinary...');
              
              const formData = new FormData();
              formData.append('file', blobInfo.blob());
              formData.append('upload_preset', uploadPreset);
              formData.append('folder', 'neovam/blog/content');

              const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                {
                  method: 'POST',
                  body: formData,
                }
              );

              if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'Image upload failed');
              }

              const data = await response.json();
              
              console.log('✅ Image uploaded to Cloudinary:', data.secure_url);
              
              return data.secure_url; // ✅ Only URL inserted (no base64)
            } catch (error) {
              console.error('❌ Image upload error:', error);
              throw new Error('Image upload failed: ' + error.message);
            }
          },

          /* ==============================
             Editor Init
          ============================== */
          setup: (editor) => {
            editor.on('init', () => {
              console.log('✅ TinyMCE Blog Editor ready with Cloudinary');
            });
            
            editor.ui.registry.addButton('cloudinaryupload', {
              text: 'Upload Image',
              icon: 'image',
              onAction: () => {
                editor.execCommand('mceImage');
              }
            });
          },
        }}
      />
    </div>
  );
};

export default BlogEditor;