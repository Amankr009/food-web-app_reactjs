import UserClass from "./UserClass";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        console.log("Parent Functional Component");
    })

    return (
        <div>
            <div>Learning React!</div>
            <div>This clone of Swiggy</div>
            <UserClass type={"Class"} />
            {console.log("Parent return of Functional Component")}
        </div>
    )
};

export default About;