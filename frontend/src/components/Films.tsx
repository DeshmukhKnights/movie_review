import Link from 'next/link';

const Films = ({ films }: any) => {
    return (
        <>
            <ul className="list-none space-y-4 text-4xl font-bold mb-3">
                {films &&
                    films.data.map((film: any) => {
                        return (
                            <li key={film.id}>
                                <Link href={`film/` + film.id}>
                                    {film.attributes.title}
                                </Link>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};

export default Films;