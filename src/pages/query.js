async function getArtist() {
  const res = await fetch(`https://v8zqtm.buildship.run/demo`)
  return res.json()
}
 
export default async function Page() {
  // Initiate both requests in parallel
  const artist = await getArtist()

  return (
    <div>
      <h1>{artist.title}</h1>
    </div>
  )
}