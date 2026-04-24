
import { client } from "..";
import { QueryResult } from "pg";

interface TravelPlan {
  id: number;
  title: string;
  destination_city: string;
  destination_country: string;
  start_date: string;
  end_date: string;
  budget: number;
}

/*
 * Function should insert a new travel plan for this user
 * Should return a travel plan object
 * {
 *  title: string,
 *  destination_city: string,
 *  destination_country: string,
 *  start_date: string,
 *  end_date: string,
 *  budget: number,
 *  id: number
 * }
 */
export async function createTravelPlan(
  userId: number,
  title: string,
  destinationCity: string,
  destinationCountry: string,
  startDate: string,
  endDate: string,
  budget: number
) {
  const res = await client.query( 
    `insert into travel_plans (user_id , title,destination_city, destination_country, start_date, end_date, budget) values ($1, $2, $3, $4, $5, $6, $7) returning *`,[
      userId,
      title,
      destinationCity,
      destinationCountry,
      startDate,
      endDate,
      budget
    ]
  )
  return res.rows[0];

}

/*
 * Function should update the budget or title for a specific travel plan
 * Should return the updated travel plan object
 */
export async function updateTravelPlan(
  planId: number,
  title?: string,
  budget?: number
) {
  const res = await client.query(
    `update travel_plans set title = COALESCE($1, title), budget = COALESCE($2, budget) where id = $3 returning *`,[
      title,
      budget,
      planId
    ]
  )
  return res.rows[0];
}



/*
 * Function should get all the travel plans of a given user
 * Should return an array of travel plan objects
 * [{
 *  title: string,
 *  destination_city: string,
 *  destination_country: string,
 *  start_date: string,
 *  end_date: string,
 *  budget: number,
 *  id: number
 * }]
 */
export async function getTravelPlans(userId: number) {
  const res = await client.query(
    `select * from travel_plans where user_id = $1`, [userId]
  )
  return res.rows;

}
