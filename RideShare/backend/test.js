import rideSharingController from './controllers/rideSharingController.js';

const rideSharing = new rideSharingController();

// Add users
rideSharing.add_user({ name: 'Rohan', gender: 'M', age: 36 });
rideSharing.add_user({ name: 'Shashank', gender: 'M', age: 29 });
rideSharing.add_user({ name: 'Nandini', gender: 'F', age: 29 });
rideSharing.add_user({ name: 'Shipra', gender: 'F', age: 27 });
rideSharing.add_user({ name: 'Gaurav', gender: 'M', age: 29 });
rideSharing.add_user({ name: 'Rahul', gender: 'M', age: 35 });

// Add vehicles
rideSharing.add_vehicle({ owner: 'Rohan', model: 'Swift', registration_number: 'KA-01-12345' });
rideSharing.add_vehicle({ owner: 'Shashank', model: 'Baleno', registration_number: 'TS-05-62395' });
rideSharing.add_vehicle({ owner: 'Shipra', model: 'Polo', registration_number: 'KA-05-41491' });
rideSharing.add_vehicle({ owner: 'Shipra', model: 'Activa', registration_number: 'KA-12-12332' });
rideSharing.add_vehicle({ owner: 'Rahul', model: 'XUV', registration_number: 'KA-05-1234' });

// Offer rides
rideSharing.offer_ride({ user: 'Rohan', origin: 'Hyderabad', available_seats: 1, vehicle: 'Swift, KA-01-12345', destination: 'Bangalore' });
rideSharing.offer_ride({ user: 'Shipra', origin: 'Bangalore', available_seats: 1, vehicle: 'Activa, KA-12-12332', destination: 'Mysore' });
rideSharing.offer_ride({ user: 'Shipra', origin: 'Bangalore', available_seats: 2, vehicle: 'Polo, KA-05-41491', destination: 'Mysore' });
rideSharing.offer_ride({ user: 'Shashank', origin: 'Hyderabad', available_seats: 2, vehicle: 'Baleno, TS-05-62395', destination: 'Bangalore' });
rideSharing.offer_ride({ user: 'Rahul', origin: 'Hyderabad', available_seats: 5, vehicle: 'XUV, KA-05-1234', destination: 'Bangalore' });
rideSharing.offer_ride({ user: 'Rohan', origin: 'Bangalore', available_seats: 1, vehicle: 'Swift, KA-01-12345', destination: 'Pune' });

// Select rides
rideSharing.select_ride({ user: 'Nandini', origin: 'Bangalore', destination: 'Mysore', seats: 1, selection_strategy: 'Most Vacant' });
rideSharing.select_ride({ user: 'Gaurav', origin: 'Bangalore', destination: 'Mysore', seats: 1, preferred_vehicle: 'Activa' });
rideSharing.select_ride({ user: 'Shashank', origin: 'Mumbai', destination: 'Bangalore', seats: 1, selection_strategy: 'Most Vacant' });
rideSharing.select_ride({ user: 'Rohan', origin: 'Hyderabad', destination: 'Bangalore', seats: 1, preferred_vehicle: 'Baleno' });
rideSharing.select_ride({ user: 'Shashank', origin: 'Hyderabad', destination: 'Bangalore', seats: 1, preferred_vehicle: 'Polo' });

// End rides
rideSharing.end_ride({ ride_id: 1 });
rideSharing.end_ride({ ride_id: 2 });
rideSharing.end_ride({ ride_id: 3 });
rideSharing.end_ride({ ride_id: 4 });

// Print ride stats
rideSharing.print_ride_stats();
