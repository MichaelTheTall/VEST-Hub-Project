## Brief

I'm making an app to track ships and shuttles docking at the Vesta Extra Solar Transit Hub.

## MVP

The app will have:
* Passenger objects (with a *name* and *id_number*)
* Dock officer objects (with a *name*, *id_number* and *ships_inspected*)
* Ship objects (with a *name*, *capacity*, *passengers*, *destination* and *origin*)
* Berth objects (with a *number*, *docked_ship* and *passengers*)
* A Station object (with a *berth_list*, *passengers*, *dock_officers* and *previous_ships*)

The user should be able to:
* Add, edit and remove ships
* Add, edit and remove passengers
* Add, edit and remove dock officers
* Add, edit and remove berths
* View a list of ships docked at the V.E.S.T. Hub
* Filter the list of ships by name, capacity and destination
* Search for a particular passenger

## Extensions

The user might be able to:
* View a Departures and Arrivals board with ships sorted by destination/origin
* View a list of all the ships that have ever docked at the V.E.S.T. Hub
* Search for a particular passenger who isn't currently on the station (EG: The Space Police are looking for a suspect who was from *origin* and passed through the V.E.S.T. Hub)
* View a list of all the ships a Dock Officer has inspected (EG: one ship has been found to be smuggling, you might have a dodgy Dock Officer!)
