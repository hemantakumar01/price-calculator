function calculateProfit() {
  const productCost = parseFloat(document.getElementById("productCost").value);
  const adExpenses = parseFloat(document.getElementById("adExpenses").value);
  const operationalCosts = parseFloat(
    document.getElementById("operationalCosts").value
  );
  const returnRate =
    parseFloat(document.getElementById("returnRate").value) / 100;
  const desiredProfitMargin =
    parseFloat(document.getElementById("desiredProfitMargin").value) / 100;

  const totalCost = productCost + adExpenses + operationalCosts;
  const costOfReturnsPerProduct = totalCost * returnRate;
  const adjustedTotalCost = totalCost + costOfReturnsPerProduct;

  const sellingPrice = adjustedTotalCost / (1 - desiredProfitMargin);
  const profitPerProduct = sellingPrice - adjustedTotalCost;

  document.getElementById("result").innerHTML = `
        <p>Selling Price: ₹${sellingPrice.toFixed(2)}</p>
        <p>Profit per Product: ₹${profitPerProduct.toFixed(2)}</p>
        <p>Profit Percentage: ${(desiredProfitMargin * 100).toFixed(2)}%</p>
    `;
}
