import Sidebar from "./Sidebar/Sidebar"
import Wrapper from "./Wrapper/Wrapper"

const People = () => {
    return (
        <div className="people-layout">
            <section className="people">
                <div className="people-title">
                    <h1>People</h1>
                </div>
                <div className="container">
                    <Sidebar />
                    <Wrapper />
                </div>
            </section>
        </div>
    )
}

export default People