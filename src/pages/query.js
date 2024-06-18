
export default function QueryPage() {
	const callAPI = async () => {
		try {
			const res = await fetch(
				`https://v8zqtm.buildship.run/demo`
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<button onClick={callAPI}>Make API Call</button>
			</main>
		</div>
	);
}