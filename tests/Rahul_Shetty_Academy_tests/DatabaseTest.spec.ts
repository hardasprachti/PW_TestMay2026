
import { CommonUtility } from "../../utils/CommonUtility";
import { test, expect } from '@playwright/test';

test("Verify database connection and result", async ({ page }) => {
  const result = await CommonUtility.connectDatabase("select * from practice.dept");
  console.log(result);
  console.log(result[0].dname);    
  expect(Array.isArray(result)).toBe(true);
  expect((result as unknown[]).length).toBeGreaterThan(0);
});