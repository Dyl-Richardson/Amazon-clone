const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
    const { items, email } = req.body

    // Transform data for stripe
    const transformItems = items.map(item => ({
        quantity: 1,
        price_data: {
            currency: 'eur',
            // stipe is in cent so * 100 to make euro
            unit_amount: item.price * 100,
            product_data: { name: item.title, images: [item.image], description: item.description }
        },
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_rates: ['shr_1KTlulAn47J8SQmV1oOZgZpm'],
        shipping_address_collection: { allowed_countries: ['BE', 'FR', 'NL', 'LU'] },
        line_items: transformItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email: email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })

    res.status(200).json({ id: session.id })
}