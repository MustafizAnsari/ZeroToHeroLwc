import { LightningElement, track } from 'lwc';

export default class ImageUploader extends LightningElement {
    @track filePreviews = [];
    @track selectedImage;

    handleFileUpload(event) {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = () => {
                this.filePreviews.push({
                    id: Date.now() + i,
                    name: file.name,
                    url: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    }

    handleDelete(event) {
        const index = event.target.value;
        this.filePreviews.splice(index, 1);
        this.filePreviews = [...this.filePreviews];

        if (this.filePreviews.length === 0) {
            this.selectedImage = undefined;
        } else if (this.selectedImage === this.filePreviews[index]?.url) {
            this.selectedImage = undefined;
        }
    }

    handlePreview(event) {
        const index = event.target.value;
        this.selectedImage = this.filePreviews[index].url;
    }
}
