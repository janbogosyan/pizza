export const SectionHeaders = ({ subHeader, mainHeader }) => {
    return (
        <>
            <div className="text-center">
                <h3 className="uppercase text-gray-500 leading-4">
                    {subHeader}
                </h3>
                <h2 className="text-primary font-bold text-4xl">
                    {mainHeader}
                </h2>
            </div>
        </>
    )
}