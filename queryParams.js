//Exempel på metoder man kan använda med URLSearchParams

// The original URL
const url = new URL('https://www.youtube.com/watch?v=FhguwBJeqWs&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc');

// Create a URLSearchParams object from the URL's query string
const params = new URLSearchParams(url.search);

// 1. Get a parameter by name
console.log('Video ID:', params.get('v'));  // Output: FhguwBJeqWs
console.log('Playlist ID:', params.get('list'));  // Output: PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc

// 2. Check if a parameter exists
console.log('Has video ID?', params.has('v'));  // Output: true
console.log('Has "start" parameter?', params.has('start'));  // Output: false

// 3. Get all values of a parameter
// Example for a URL with repeated parameters: https://www.example.com?item=apple&item=banana&item=cherry
const exampleUrl = new URL('https://www.example.com?item=apple&item=banana&item=cherry');
const exampleParams = new URLSearchParams(exampleUrl.search);
console.log('All items:', exampleParams.getAll('item'));  // Output: ['apple', 'banana', 'cherry']

// 4. Append a new parameter
params.append('autoplay', 'true');
console.log('Appended Params:', params.toString());  
// Output: v=FhguwBJeqWs&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&autoplay=true

// 5. Set the value of an existing parameter
params.set('v', 'newVideoId123');
console.log('Updated Params (v changed):', params.toString());
// Output: v=newVideoId123&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&autoplay=true

// 6. Delete a parameter
params.delete('list');
console.log('Params after deletion of "list":', params.toString());
// Output: v=newVideoId123&autoplay=true

// 7. Iterate over all parameters
params.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// v: newVideoId123
// autoplay: true

// 8. Convert URLSearchParams back to a query string
const updatedQueryString = params.toString();
console.log('Final Query String:', updatedQueryString);
// Output: v=newVideoId123&autoplay=true