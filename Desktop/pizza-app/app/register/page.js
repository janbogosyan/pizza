

export default function RegisterPage() {
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl my-12">
                Register
            </h1>
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">Register</button>
            </form>
        </section>
    );
}

//css на inputite i buttonite съм ги направил в globals.css faila