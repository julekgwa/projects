---
title: API Reference
---

# API Reference

## PaymentIcon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `PaymentIconType` | **required** | The payment card brand |
| `variant` | `PaymentIconStyle` | `'flat'` | The icon style variant |
| `width` | `number \| string` | `24` | Icon width |
| `height` | `number \| string` | `24` | Icon height |
| `fill` | `string` | `undefined` | Fill color (mainly for mono variants) |

## Types

### PaymentIconType

```typescript
type PaymentIconType =
  | 'visa'
  | 'mastercard'
  | 'amex'
  | 'maestro'
  | 'discover'
  | 'jcb'
  | 'diners'
  | 'unionpay'
  | 'elo'
  | 'hiper'
  | 'hipercard'
  | 'mir'
  | 'alipay'
  | 'paypal'
  | 'generic-card'
  | 'security-code'
  | 'security-code-front';
```

### PaymentIconStyle

```typescript
type PaymentIconStyle =
  | 'flat'
  | 'flatRounded'
  | 'logo'
  | 'logoBorder'
  | 'mono'
  | 'monoOutline';
```

## Individual Icon Components

Each payment type and variant combination is available as an individual component:

```typescript
import {
  VisaFlat,
  VisaFlatRounded,
  VisaLogo,
  VisaLogoBorder,
  VisaMono,
  VisaMonoOutline,
  // ... similar for other card types
} from 'react-native-payment-card-icons';
```

## Style Variants

### flat
- Default style
- Full color with brand colors
- Best for modern UI

### flatRounded
- Similar to flat but with rounded corners
- Great for card input forms

### logo
- Official brand logo
- Best for marketing materials

### logoBorder
- Logo with border
- Suitable for professional forms

### mono
- Single color filled version
- Customizable with `fill` prop

### monoOutline
- Single color outline version
- Perfect for minimal designs

## Examples

### Different Variants

```tsx
<PaymentIcon type="visa" variant="flat" />
<PaymentIcon type="visa" variant="flatRounded" />
<PaymentIcon type="visa" variant="logo" />
<PaymentIcon type="visa" variant="logoBorder" />
<PaymentIcon type="visa" variant="mono" fill="#000" />
<PaymentIcon type="visa" variant="monoOutline" fill="#000" />
```

### Custom Sizing

```tsx
<PaymentIcon
  type="mastercard"
  width={60}
  height={40}
/>
```

### Custom Colors (Mono Variants)

```tsx
<PaymentIcon
  type="visa"
  variant="mono"
  fill="#007bff"
/>
```

### TypeScript Usage

```tsx
import {
  PaymentIcon,
  PaymentIconType,
  PaymentIconStyle,
  PaymentIconProps
} from 'react-native-payment-card-icons';

const cardType: PaymentIconType = 'visa';
const variant: PaymentIconStyle = 'flatRounded';

const MyComponent = () => (
  <PaymentIcon
    type={cardType}
    variant={variant}
    width={60}
    height={40}
  />
);
