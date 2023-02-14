export default function Page({ params }: { params: { parent_md5: string; child_md5: string } }) {
	return (
		<>
			<p>{params.parent_md5}</p>
			<p>{params.child_md5}</p>
		</>
	);
}
