//@ts-nocheck
export default async function main(uiBuilder) {
    uiBuilder.buttons('Cat or Dog?', ['Cat', 'Dog'], catOrDog => {
        uiBuilder.text(`You click ${catOrDog}`);
    });
}