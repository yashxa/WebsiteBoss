document.getElementById("websiteForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    // Gather form data
    const industry = document.getElementById("industry").value;
    const companyName = document.getElementById("companyName").value;
    const contact = document.getElementById("contact").value;
    const colorTheme = document.getElementById("colorTheme").value;
    const productDetails = document.getElementById("productDetails").value;
  
    // Simulate generating a website (for now, just log the data)
    console.log({
      industry,
      companyName,
      contact,
      colorTheme,
      productDetails,
    });
  
    // Display a success message
    alert("Website generated successfully! Check the console for details.");
  });  