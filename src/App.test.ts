import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import App from './App.svelte';

describe('App', () => {
    describe('CategoryB', () => {
        test('shows proper heading when rendered', async () => {
            render(App);
            
            const result = 'mocked foo!';
            const targetH1 = await screen.findByRole('heading', { name: `From Backend! ${result}`, level: 1 });

            expect(targetH1).toBeInTheDocument();
        })
    })
})