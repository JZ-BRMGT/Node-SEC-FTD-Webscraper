CREATE TABLE FailsToDeliver
(
    id              SERIAL PRIMARY KEY,
    SETTLEMENT_DATE CHAR(8),
    CUSIP           CHAR(9),
    SYMBOL          VARCHAR(10),
    QUANTITY_FAILS  BIGINT,
    DESCRIPTION     VARCHAR(30),
    PRICE           DECIMAL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);