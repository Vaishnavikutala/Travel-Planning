document.getElementById('travelForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const transport = document.getElementById('transport').value;
    const accommodation = document.getElementById('accommodation').value;
    const activities = document.getElementById('activities').value;

    const transportCO2 = {
        car: 0.25,
        bus: 0.05,
        train: 0.02,
        plane: 0.15
    };

    const accommodationCO2 = {
        hotel: 10,
        hostel: 5,
        eco_lodge: 3
    };

    const activitiesCO2 = {
        museum: 2,
        hiking: 0,
        city_tour: 3
    };

    // Example distance and nights stayed
    const distance = 100; // in km
    const nights = 2; // nights stayed

    const totalCO2 = (transportCO2[transport] * distance) + 
                     (accommodationCO2[accommodation] * nights) + 
                     activitiesCO2[activities];

    document.getElementById('result').innerText = `Total Estimated Carbon Footprint: ${totalCO2.toFixed(2)} kg CO2`;
});
