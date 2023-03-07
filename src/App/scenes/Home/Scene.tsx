export default function Scene() {

    return (
        <>
            <div style={{ width: "100%", height: "100%" }}>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                    <div>
                        <i className="fa-brands fa-react text-muted" style={{ fontSize: "10rem" }}></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-arrow-right p-4 text-muted" style={{ fontSize: "4rem" }}></i>
                    </div>
                    <div className={"d-flex flex-column justify-content-center align-items-center"}>
                        <div>
                            <i className="fa-brands fa-html5 p-2 text-muted" style={{ fontSize: "5rem" }}></i>
                            <i className="fa-brands fa-css3-alt p-2 text-muted" style={{ fontSize: "5rem" }}></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-js p-2 text-muted" style={{ fontSize: "5rem" }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}