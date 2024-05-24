export default class RideSharing {
    constructor() {
        this.users = [];
        this.vehicles = [];
        this.rides = [];
        this.rideCount = 0;
    }

    add_user({ name, gender, age }) {
        this.users.push({ name, gender, age });
    }

    add_vehicle({ owner, model, registration_number }) {
        const userExists = this.users.some(user => user.name === owner);
        if (userExists) {
            this.vehicles.push({ owner, model, registration_number });
        } else {
            console.log(`User ${owner} does not exist.`);
        }
    }

    offer_ride({ user, origin, available_seats, vehicle, destination }) {
        const [model, registration_number] = vehicle.split(', ');
        const ride = {
            id: ++this.rideCount,
            driver: user,
            origin,
            available_seats,
            vehicle_model: model,
            vehicle_registration_number: registration_number,
            destination,
            ended: false,
            passengers: []
        };
        this.rides.push(ride);
    }
    
    

    select_ride({ user, origin, destination, seats, preferred_vehicle, selection_strategy }) {
        let availableRides = this.rides.filter(
            (ride) => ride.origin === origin && ride.destination === destination && ride.available_seats >= seats && !ride.ended
        );
    
        if (preferred_vehicle) {
            availableRides = availableRides.filter(ride => ride.vehicle_model === preferred_vehicle);
        } else if (selection_strategy === "Most Vacant") {
            availableRides.sort((a, b) => b.available_seats - a.available_seats);
        }
    
        const selectedRides = [];
        for (const ride of availableRides) {
            const selectedRide = { ...ride };  // Create a copy
            selectedRide.available_seats -= seats;
            selectedRide.passengers.push(user);
            selectedRides.push(selectedRide);
        }
    
        if (selectedRides.length > 0) {
            return selectedRides;
        } else {
            return [];
        }
    }
    
    

    end_ride({ ride_id }) {
        const ride = this.rides.find(ride => ride.id === ride_id);
        if (ride) {
            ride.ended = true;
        }
    }

    print_ride_stats() {
        const userStats = {};
        this.users.forEach(user => {
            userStats[user.name] = {
                Taken: 0,
                Offered: 0
            };
        });

        this.rides.forEach(ride => {
            ride.passengers.forEach(passenger => {
                userStats[passenger].Taken++;
            });
            userStats[ride.driver].Offered++;
        });

        const formattedStats = {};
        for (const [user, stats] of Object.entries(userStats)) {
            formattedStats[user] = `${stats.Taken} Taken, ${stats.Offered} Offered`;
        }

        console.log(formattedStats);
        return formattedStats;
    }
}
