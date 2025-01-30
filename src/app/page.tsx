export default function Home() {
  const repos = [
	'Darshna-AI-Generated',
	'Manalis-Merriage',
	'Hungrito-food-fest-7.0',
	'Binalben-na-Marriage',
	'Manjukaki-Harikaka-50th-anniversary',
	'KD-Birthday',
	'Heritage-walk'
];

return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <ul className="w-full max-w-5xl space-y-4">
        {repos.map(repo => (
          <li key={repo} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
            <a href={`/nextjs_image_gallary_test_5/${repo}`} className="text-blue-600 hover:text-blue-800 font-mono text-sm">
              {repo}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
