export const MenuItem = () => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-black hover:text-white">
            <img src='/pizza.png' className="max-h-auto max-h-24 block mx-auto" alt="pizza" />
            <h4 className="font-semibold text-xl my-2">
                Margarita pizza
            </h4>
            <p className=" text-sm">
                Lorem ipsum asdasd asdasd ashdiuhiou asoidjoaij
            </p>
            <button className="bg-primary text-white rounded-full px-3 py-2 mt-3" >
                Add to cart 12$
            </button>
        </div>
    )
}