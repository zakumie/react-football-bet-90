import { Outlet, Link } from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}