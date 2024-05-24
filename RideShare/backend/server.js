import express from 'express';
import RideSharing from './controllers/rideSharingController.js';

const app = express();
const rideSharing = new RideSharing();

app.use(express.json());

app.post('/api/users', (req, res) => {
    const { name, gender, age } = req.body;
    if (!name || !gender || !age) {
        return res.status(400).send('Missing user parameters');
    }
    rideSharing.add_user({ name, gender, age });
    res.status(201).send('User added');
});

app.post('/api/vehicles', (req, res) => {
    const { owner, model, registration_number } = req.body;
    if (!owner || !model || !registration_number) {
        return res.status(400).send('Missing vehicle parameters');
    }
    rideSharing.add_vehicle({ owner, model, registration_number });
    res.status(201).send('Vehicle added');
});

app.post('/api/rides/offer', (req, res) => {
    const { user, origin, available_seats, vehicle, destination } = req.body;
    if (!user || !origin || !available_seats || !vehicle || !destination) {
        return res.status(400).send('Missing ride offer parameters');
    }
    rideSharing.offer_ride({ user, origin, available_seats, vehicle, destination });
    res.status(201).send('Ride offered');
});

app.post('/api/rides/select', (req, res) => {
    const { user, origin, destination, seats, preferred_vehicle, selection_strategy } = req.body;
    if (!user || !origin || !destination || !seats || (!preferred_vehicle && !selection_strategy)) {
        return res.status(400).send('Missing ride select parameters');
    }
    const selectedRide = rideSharing.select_ride({ user, origin, destination, seats, preferred_vehicle, selection_strategy });
    if (selectedRide) {
        res.json(selectedRide);
    } else {
        res.status(404).send('No rides available');
    }
});

app.post('/api/rides/end', (req, res) => {
    const { ride_id } = req.body;
    if (!ride_id) {
        return res.status(400).send('Missing ride ID');
    }
    rideSharing.end_ride({ ride_id });
    res.status(200).send('Ride ended');
});

app.get('/api/rides/stats', (req, res) => {
    const { user } = req.body;
    if (!user) {
        return res.status(400).send('Missing user parameter');
    }
    const stats = rideSharing.print_ride_stats(user);
    res.json(stats);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
