function calculateRipeness() {
    const resultDiv = document.getElementById('result');
    const uploadedImage = document.getElementById('uploadedImage');
    const fileInput = document.getElementById('imageInput');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            uploadedImage.classList.remove('hidden');

            // Simulate ripeness calculation (replace this with actual logic)
            const ripenessPercent = simulateRipenessCalculation();
            resultDiv.innerText = `Ripeness: ${ripenessPercent}%`;
            resultDiv.classList.remove('hidden');
        };

        reader.readAsDataURL(file);
    } else {
        resultDiv.innerText = 'Please select an image.';
        resultDiv.classList.remove('hidden');
    }
}

function simulateRipenessCalculation() {
    // Simulate ripeness calculation with a random percentage (0-100)
    return Math.floor(Math.random() * 100);
}
