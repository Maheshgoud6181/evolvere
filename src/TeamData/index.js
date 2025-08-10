// src/teamData/index.js
import { batch2026 } from './2026';
import { batch2027 } from './2027';
import { batch2028 } from './2028';
import { Alumini } from './Alumini'; // Assuming you have an all.js file for alumni or other members

export const teamMembers = {
    "5th": Alumini,
    "4th": batch2026,  
    "3rd": batch2027,  
    "2nd": batch2028   
};

// You can also export individual batches if needed
export {Alumini,batch2026, batch2027, batch2028 };