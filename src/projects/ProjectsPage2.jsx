export const ProjectsPage2 = () => {
    const name = 'Andres';
    const ele = <h1 className="firstAttribute">
        { (name == 'Andres') ? `Hola ${name}, bienvenido!!` : 'Acceso denegado!'}
        </h1>;

    return ele;
}
