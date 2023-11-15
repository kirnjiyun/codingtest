SELECT USER_ID, PRODUCT_ID
FROM (
    SELECT USER_ID, PRODUCT_ID,
           ROW_NUMBER() OVER(PARTITION BY USER_ID, PRODUCT_ID ORDER BY SALES_DATE) AS rn
    FROM ONLINE_SALE
) sub
WHERE rn = 2
ORDER BY USER_ID ASC, PRODUCT_ID DESC