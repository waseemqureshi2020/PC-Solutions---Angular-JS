var app = angular.module('pcSolutionsApp', []);

app.controller('MainController', ['$scope', function($scope) {
    
    // --- HOMEPAGE DATA ---
    $scope.mainImage = "https://pngimg.com/uploads/computer_pc/computer_pc_PNG102119.png"; // I updated this to a working icon
    $scope.heroDescription = "Keeping your technology running smoothly is our top priority. From emergency hardware failures to sluggish system performance, our expert technicians provide fast, reliable, and affordable IT solutions.";
    
    $scope.services = [
        { title: "Hardware Repairs", description: "Don't let a broken device slow you down. We specialize in diagnosing and repairing a wide range of hardware issues for both laptops and desktops." },
        { title: "Virus Removal", description: "A slow or infected computer is a major security risk. Our comprehensive malware and virus removal service cleans your system and secures your data." },
        { title: "System Tuneup", description: "Over time, computers accumulate digital clutter. Our system tune-up service optimizes your OS, removes junk files, and updates drivers for peak performance." }
    ];

    // --- SERVICES PAGE DATA ---
    $scope.allServices = [
        { title: "Hardware Repairs", description: "From cracked screens to faulty motherboards, we have the tools and expertise to bring your devices back to life." },
        { title: "Virus & Malware Removal", description: "We thoroughly scan, clean, and secure your system against current and future digital threats." },
        { title: "Data Recovery", description: "Accidentally deleted important files or suffered a hard drive crash? We have advanced tools to recover your critical data." },
        { title: "Custom PC Builds", description: "Whether you need a gaming rig or a high-performance workstation, we build custom PCs tailored to your exact specifications." },
        { title: "Network Setup", description: "We set up secure, high-speed Wi-Fi networks for your home or office, ensuring full coverage and optimal security." },
        { title: "Software Installation", description: "Need operating systems, office suites, or specialized software installed and configured? We handle it quickly and correctly." }
    ];

    // --- CONTACT PAGE DATA ---
    $scope.contactInfo = {
        phone: "(555) 123-4567",
        email: "support@pcsolutions.com",
        address: "123 Tech Boulevard, Suite 100, Silicon Valley, CA 94000",
        hours: "Mon-Fri: 8:00 AM - 6:00 PM"
    };

    $scope.formData = {};
    $scope.formSubmitted = false;

    $scope.submitForm = function() {
        if ($scope.contactForm.$valid) {
            $scope.formSubmitted = true;
            $scope.formData = {}; 
            $scope.contactForm.$setPristine();
        }
    };

    // --- GLOBAL DATA ---
    $scope.currentYear = new Date().getFullYear();

}]);