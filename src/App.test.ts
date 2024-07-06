import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import App from './App.svelte';

describe('App', () => {
    describe('CategoryB', () => {
        test('shows proper heading when rendered', () => {
            render(App);
            
            const result = 'mocked foo!';
            const targetH1 = screen.getAllByRole('heading', { level: 1 }).find(h => h.textContent === `From Backend! ${result}`);

            expect(targetH1).toBeInTheDocument();
        })
    })
})