import seeder from "@/api/seeder"

export default async () => {
    const message = await seeder()

    return (
        <>
            <p>{message}</p>
        </>
    )
}