import UserClass from "./UserClass";
import UserFunction from "./UserFunction";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        //console.log("Parent Functional Component");
    })

    return (
        <div>
            <div>Learning React!</div>
            <div>This clone of Swiggy</div>
            <UserFunction name={"Aman Kumar Yadav"} type={"Functional"}/>
            <UserClass type={"Class"} />
            {/* console.log("Parent return of Functional Component") */}
        </div>
    )
};

export default About;