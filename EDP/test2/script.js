const imageArray = [
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=200&fit=crop", // City
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&h=200&fit=crop", // Car
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop", // Person 1
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop", // Person 2
            "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop", // Office
            "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=200&h=200&fit=crop"  // Logo placeholder
        ];

        let currentTargetSrc = "";

        // --- STEP 2: Logic to Randomize and Render ---
        function initGame() {
            const container = document.getElementById('image-options-container');
            const targetImgElement = document.getElementById('target-image');
            const instructionText = document.getElementById('instruction-text');
            const messageDiv = document.getElementById('result-message');
            
            container.innerHTML = '';
            messageDiv.innerHTML = '';
            messageDiv.className = '';
            
            // 1. Pick a random matching image from the array
            const randomIndex = Math.floor(Math.random() * imageArray.length);
            currentTargetSrc = imageArray[randomIndex];

            // 2. Display the Target Image in the top box
            targetImgElement.src = currentTargetSrc;
            targetImgElement.style.display = "block";
            instructionText.style.display = "none";

            // 3. Render the list of images below (Shuffled optionally, but here we just list them)
            imageArray.forEach((imgSrc) => {
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc;
                imgElement.className = 'game-image';
                
                // Add click event listener
                imgElement.onclick = function() {
                    checkMatch(imgSrc);
                };

                container.appendChild(imgElement);
            });
        }

        // --- STEP 3: Check matching logic ---
        function checkMatch(selectedSrc) {
            const messageDiv = document.getElementById('result-message');

            if (selectedSrc === currentTargetSrc) {
                // Success Case
                messageDiv.textContent = "Correct! You matched the image.";
                messageDiv.className = "success";
                
                // Optional: visuals to show game is won
                document.getElementById('target-display-area').style.borderColor = "green";
            } else {
                // Failure Case
                messageDiv.textContent = "Not a match. Try again!";
                messageDiv.className = "error";
                document.getElementById('target-display-area').style.borderColor = "red";
            }
        }

        window.onload = initGame;
