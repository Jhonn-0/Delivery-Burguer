
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const closeModalButtons = document.querySelectorAll('.close-button, #closeModalBtn');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotalSpan = document.getElementById('cartTotal');
    const cartCountSpan = document.getElementById('cartCount');
    const finalizeOrderBtn = document.getElementById('finalizeOrderBtn');
    const deliveryAddressInput = document.getElementById('deliveryAddress');

    let cart = [];

    // Load cart from localStorage if available
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCartDisplay();
    }

    // Open cart modal
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex'; // Use flex to center the modal
        updateCartDisplay();
    });

    // Close cart modal
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    });

    // Close modal if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Add item to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.hamburguer');
            const itemName = menuItem.dataset.name;
            const itemPrice = parseFloat(menuItem.dataset.price);

            const existingItem = cart.find(item => item.name === itemName);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name: itemName, price: itemPrice, quantity: 1 });
            }
            saveCart();
            updateCartDisplay();
            showItemAddedMessage();
        });
    });
        // Add item to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.bebida');
            const itemName = menuItem.dataset.name;
            const itemPrice = parseFloat(menuItem.dataset.price);

            const existingItem = cart.find(item => item.name === itemName);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name: itemName, price: itemPrice, quantity: 1 });
            }
            saveCart();
            updateCartDisplay();
            showItemAddedMessage();
        });
    });

    // Function to show "Item adicionado ao carrinho!" message
    function showItemAddedMessage() {
        let messageDiv = document.querySelector('.item-added-message');
        if (!messageDiv) {
            messageDiv = document.createElement('div');
            messageDiv.classList.add('item-added-message');
            messageDiv.textContent = 'Item adicionado ao carrinho!';
            document.body.appendChild(messageDiv);
        }
        messageDiv.style.display = 'block';
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 2000); // Hide after 2 seconds
    }

    // Update cart display in the modal
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let totalItems = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; color: #777;">Seu carrinho está vazio.</p>';
        } else {
            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>R$ ${(item.price * item.quantity).toFixed(2)}</p>
                        <p>Quant: ${item.quantity}</p>
                    </div>
                    <button class="cart-item-remove" data-index="${index}">Remover</button>
                `;
                cartItemsContainer.appendChild(itemElement);
                total += item.price * item.quantity;
                totalItems += item.quantity;
            });
        }

        cartTotalSpan.textContent = `R$ ${total.toFixed(2)}`;
        cartCountSpan.textContent = totalItems;
        attachRemoveEventListeners();
    }

    // Attach event listeners to remove buttons
    function attachRemoveEventListeners() {
        const removeButtons = document.querySelectorAll('.cart-item-remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const indexToRemove = parseInt(event.target.dataset.index);
                removeItemFromCart(indexToRemove);
            });
        });
    }

    // Remove item from cart
    function removeItemFromCart(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        saveCart();
        updateCartDisplay();
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Finalize order (Placeholder for actual order processing)
    finalizeOrderBtn.addEventListener('click', () => {
        const deliveryAddress = deliveryAddressInput.value.trim();

        if (cart.length === 0) {
            alert('Seu carrinho está vazio. Adicione itens antes de finalizar o pedido.');
            return;
        }

        if (!deliveryAddress) {
            alert('Por favor, digite seu endereço de entrega.');
            return;
        }

        let orderSummary = 'Seu Pedido:\n\n';
        cart.forEach(item => {
            orderSummary += `${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
        });
        orderSummary += `\nTotal: ${cartTotalSpan.textContent}\n`;
        orderSummary += `Endereço de Entrega: ${deliveryAddress}\n\n`;
        orderSummary += 'Obrigado pelo seu pedido! Em breve entraremos em contato para confirmar.';

        alert(orderSummary);

        // Clear cart after finalizing
        cart = [];
        saveCart();
        updateCartDisplay();
        cartModal.style.display = 'none';
        deliveryAddressInput.value = ''; // Clear address input
    });
});

const spanHorario = document.querySelector('.horarios-span');

    function verificarHorario() {
        const agora = new Date();
        const hora = agora.getHours();
        const diaSemana = agora.getDay(); 
        // getDay retorna: 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

        const aberto = (diaSemana >= 2 && diaSemana <= 6) || diaSemana === 0;
        const dentroDoHorario = hora >= 18 && hora <= 22;

        if (aberto && dentroDoHorario) {
            spanHorario.style.backgroundColor = 'green';
            spanHorario.textContent = 'Terç á Dom 18:00 às 22:00';
        } else if (!aberto) {
            spanHorario.style.backgroundColor = 'red';
            spanHorario.textContent = 'Fechado (Segunda-feira) - Abrimos de Terç á Dom 18:00 às 22:00';
        } else {
            spanHorario.style.backgroundColor = 'red';
            spanHorario.textContent = 'Terç á Dom 18:00 às 22:00';
        }
    }

    // Executa ao carregar a página
    verificarHorario();

    // Atualiza a cada minuto
    setInterval(verificarHorario, 60000);
