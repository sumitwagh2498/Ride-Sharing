****** IMPORTANT ******
To run the project :    npm start (with Thunderclient testing)
To run the test cases : node test.js

add_user:    Registers a new user to the ride-sharing system by adding their details such as name, gender, and age.
add_vehicle: Adds a vehicle to the system, associating it with the owner and recording the vehicle's model and registration number.
offer_ride:  Allows a user to offer a ride by specifying details like origin, destination, available seats, and vehicle.
select_ride: Enables a user to select a ride based on origin, destination, and other optional preferences like vehicle model or selection strategy.
end_ride:    Marks a ride as ended, indicating that the ride is no longer active and cannot accept new passengers.
print_ride_stats: Outputs and returns statistics showing the number of rides taken and offered by each user

output :
        {
        Rohan: '1 Taken, 2 Offered',
        Shashank: '0 Taken, 1 Offered',
        Nandini: '2 Taken, 0 Offered',
        Shipra: '0 Taken, 2 Offered',
        Gaurav: '1 Taken, 0 Offered',
        Rahul: '0 Taken, 1 Offered'
        }

