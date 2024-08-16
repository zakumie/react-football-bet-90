
function DemoComponent(props: { name: string }) {


    return <>
        <form>
            <label>First Name: {props.name}</label> <br />
            <input type="text" name="fname" /> <br />
            <label>Last Name: {props.name}</label> <br />
            <input type="text" name="lname" /> <br />

            <input type="submit" value="Submit" />
        </form>
    </>
}


export default DemoComponent