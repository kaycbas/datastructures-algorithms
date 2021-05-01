/*

1. Calc final total dollar amount after investing  => totalInvested
2. Mult totalInvested by target %'s to determine target $ amounts for each category
3. For all funds that are currently under their target amount, sum up how much they're under => totalDeltas
4. For each fund that is under it's target amount (by 'delta'), find the fraction of (delta / totalDeltas) => thirstFractioon
5. For each fund, add (fundsToInvest * thirstFraction) to that fund

Example:

fundAmounts = [20, 30, 40]
fundsToInvest = 10
targetPercents = [30, 40, 30]

1. totalInvested = 100
2. targetAmounts = [30, 40, 30]
3. totalDeltas = 10 + 10 = 20
4. amountsToAdd = [(10 / 20) * 10, (10 / 20) * 10, (0 / 20) * 10] = [5, 5, 0]
5. finalAmounts = [25, 35, 40]

*/