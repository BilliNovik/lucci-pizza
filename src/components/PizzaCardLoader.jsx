import ContentLoader from "react-content-loader"

function PizzaCardLoader() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="137" cy="118" r="118" />
            <rect x="0" y="254" rx="0" ry="0" width="280" height="33" />
            <rect x="277" y="335" rx="0" ry="0" width="0" height="11" />
            <rect x="1" y="305" rx="0" ry="0" width="280" height="74" />
            <rect x="0" y="401" rx="0" ry="0" width="280" height="41" />
        </ContentLoader>
    )
}

export default PizzaCardLoader