// place files you want to import through the `$lib` alias in this folder.
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

console.log(env);
console.log(publicEnv);

export function functionToTest() {
	return 'This ran!';
}
