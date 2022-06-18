import '../styles/HomePage.css';

const HomePage =(props) =>{
    return (
        <main className="holder">
        <div classname="homeimg">
            <img src="img/home/img01.jpg" alt="avion"/>
        </div>
        <div classname="columnas">
            <section classname="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eligendi ullam repellat, quis quisquam
                    porro enim molestiae accusantium quo eaque explicabo dicta nesciunt saepe neque vitae, repellendus
                    impedit dolores illo.</p>
            </section>
            <section classname="testimonios">
                <h2>Testimonios</h2>
                <div classname="testimonio">
                    <span class="cita">Simplemente Excelente</span>
                    <span class="autor">Juan Gomez - zapatos.com</span>
                </div>
            </section>
        </div>

    </main>

    );
}
export default HomePage;