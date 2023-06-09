import { readFakeData } from "../../fakeData";
import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

// reading from and writing to files ==== async
export const resetDb = async () =>{
  // failsafe against resetting production DB!
  const safeToReset = process.env.NODE_ENV === "test";
  if(!safeToReset){
    console.log("WARNING: database reset unavailable outside test environment");
    return;
  }
 
  const {fakeShows, fakeBands, fakeUsers, fakeReservations} = await readFakeData();
   // overwrite data in files
   await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.users, fakeUsers )
   ]);
};