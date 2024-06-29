import { http, HttpResponse } from "msw";

export const handlers = [
    http.get(`/api/foo`, async (obj) => {
        console.log(obj);
        return HttpResponse.json(
            {
                result: "mocked foo!"
            },
            { status: 200 },
        );
    }),
];

