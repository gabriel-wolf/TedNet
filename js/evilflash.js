const defaultImage = document.querySelector(".default_image");
        const fadingImage = document.querySelector(".fade_image");

        // Function to initiate the fade-in and fade-out effect
        function crossfadeImages() {
            // Make sure the default image is at full opacity and fading image is initially transparent
            defaultImage.style.opacity = 1;
            fadingImage.style.opacity = 0;

            // Set a timeout to start the fade-in effect after a brief delay (e.g., 1 second)
            setTimeout(() => {
                fadingImage.style.opacity = 0.8; // Fading image gradually fades in

                // Set another timeout to start the fade-out effect (e.g., after 2 seconds)
                setTimeout(() => {
                    fadingImage.style.opacity = 0; // Fading image gradually fades out
                }, 5000); // 2000 milliseconds (2 seconds)
            }, 200); // 1000 milliseconds (1 second)
        }

        // Set an interval to initiate the crossfade effect at regular intervals (e.g., every 5 seconds)
        setInterval(crossfadeImages, 30000); // 5000 milliseconds (5 seconds)

        crossfadeImages();