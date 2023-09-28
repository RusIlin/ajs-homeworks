export default function read(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => ((input) => {
      try {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      } catch (err) {
        reject(() => {
          throw new Error('rejected');
        });
      }
    })(data), 1000);
  });
}
