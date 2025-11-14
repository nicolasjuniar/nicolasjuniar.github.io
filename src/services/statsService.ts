import { db } from "../firebase";
import { doc, updateDoc, increment } from "firebase/firestore";

export async function incrementVisitorCount(): Promise<void> {
  const docRef = doc(db, "stats", "stats");  

  await updateDoc(docRef, {
    visitor_count: increment(1),
  });
}
