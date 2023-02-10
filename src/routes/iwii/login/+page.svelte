<script lang="ts">
	import { LogIn } from 'lucide-svelte';
	import { enhance } from '$app/forms';
</script>

<div class="login__wrapper">
	<form use:enhance class="login__card" method="POST">
		<fieldset class="login__field">
			<label for="login__username">Anmeldename</label>
			<input type="text" required id="login__username" name="username" />
		</fieldset>
		<fieldset class="login__field">
			<label for="login__password">Passwort</label>
			<input type="password" required id="login__password" name="password" />
		</fieldset>
		<hr />
		<button class="login__button">
			<LogIn size="16" />
			Anmelden
		</button>
	</form>
</div>

<style lang="scss">
	.login__card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 50%;
		padding: 1.25rem;
		border-radius: 4px;
		background: var(--color-gray);
	}

	.login__field {
		all: unset;
		display: flex;
		flex-direction: column;

		label {
			margin-bottom: 0.5rem;
		}

		input {
			padding: 0.5rem;
			border: none;
			outline: 2px solid var(--color-gray);
			border-radius: 0.25rem;

			transition: all 0.08s ease-in-out;

			&:focus {
				outline: 2px solid var(--color-primary-light);
			}
		}
	}

	hr {
		width: 100%;
		border: 1px solid var(--color-gray-light);
	}

	.login__button {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		gap: 0.5rem;
		border: none;
		border-radius: 4px;
		background: var(--color-primary);
		color: var(--color-font);
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.08s ease-out;
		text-decoration: none;
		width: fit-content;
		margin-left: auto;

		&:hover {
			filter: brightness(0.9);
		}
	}
</style>
