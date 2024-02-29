// place files you want to import through the `$lib` alias in this folder.
import { env as publicEnv } from '$env/dynamic/public';
import { env } from '$env/dynamic/private';

console.log(env);
console.log(publicEnv);

export function functionToTest() {
	return 'This ran!';
}
